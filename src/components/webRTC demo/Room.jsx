import React, { useEffect, useState, useRef } from "react";
// import { io } from "socket.io-client";
import ReactPlayer from "react-player/streamable";

let socket, peerConnection;
// if (!socket) socket = io("http://localhost:4000");

const createConn = () => {
  if (peerConnection) return peerConnection;
  const configuration = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  };
  peerConnection = new RTCPeerConnection(configuration);
};

let count = 0;
const ROOM_ID = "1001";

const Room = () => {
  const id = Date.now();
  const [user, setUser] = useState(null);
  const myId = useRef(null);
  const remoteId = useRef(null);

  const localStream = useRef(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  //--------------------------------------------------

  useEffect(() => {
    createConn();

    // if (peerConnection) {
    peerConnection.addEventListener("negotiationneeded", async () => {
      console.log("Negotiation needed here...");
      createMyOffer();
    });
    // }
    return () => {
      peerConnection.removeEventListener("negotiationneeded", async () => {
        console.log("Negotiation needed here...");
        // createMyOffer();
      });
    };
  });

  // ----------------------------------------------
  useEffect(() => {
    console.log("USE EFFECT");

    // =========== ADD EVELISt TO PEERON.PEER('track')

    // Event listener for when a remote stream is added
    // peerConnection.ontrack = (event) => {
    //   const remoteStream = event.streams[1];
    //   // Use remoteStream for display or further processing
    //   console.log("Remote Stream Added: ", remoteStream);
    //   remoteVideoRef.current.srcObject = remoteStream;
    //   remoteStream( remoteStream);
    // };

    if (peerConnection) {
      console.log("Outside  listener ");
      peerConnection.addEventListener("track", async (ev) => {
        const remStream = ev.streams;
        console.log("Remote Stream Added: ", remStream[0]);
        remoteVideoRef.current.srcObject = remStream[0];
        setRemoteStream(remStream[0]);
      });
    }

    socket.on("room-joined", (data) => {
      console.log("inside join-----");
      const res = JSON.parse(data);
      setUser(res.message);
      console.log("My ID: ", res.id);
      // setMyId(() => res.id);
      myId.current = res.id;
      handleJoin();
    });

    socket.on("remote-socket", (id) => {
      // setRemoteId(id);
      remoteId.current = id;
      console.log("Remote ID: ", id);
      console.log("My ID: ", myId.current);

      socket.emit("res-socket", myId.current);
    });

    socket.on("res-socket", (id) => {
      // setRemoteId(id);
      remoteId.current = id;
      console.log("Remote Id ", id);
    });

    socket.on("incomming-offer", async ({ from, offer }) => {
      console.log("Incomming Call");
      // socket.emit("answer", {to: from, answer: createAnswer()});
      // await handleJoin();
      createMyAnswer(from, offer, peerConnection);
    });

    // ON: CALL-ANSWERED
    socket.on("call-answered", ({ answer }) => {
      console.log("Call Answered: ", answer);
      handleCallAcception(answer);
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  }, []);

  const handleCallAcception = async (answer) => {
    await peerConnection.setRemoteDescription(
      //previously setRemoteDescription
      new RTCSessionDescription(answer)
    );
    console.log("Call Accepted");
    for (const track of localStream.current.getTracks()) {
      peerConnection.addTrack(track, localStream.current);
    }

    // (function () {
    //   setTimeout(() => {
    //     console.log("Remote Stream HERE ----------- ");
    //     const remStream = peerConnection.getReceivers();
    //     console.log(remStream);
    //     remoteVideoRef.current.srcObject = remStream[1].track;
    //   }, 3000);
    // })();
  };

  const joinRoom = () => {
    socket.emit("join-room", ROOM_ID);
  };

  const sendMsg = () => {
    socket.emit("send-message", ROOM_ID);
  };

  const handleJoin = async () => {
    const myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    // const url = URL.createObjectURL(mylocalStream);
    localStream.current = myStream;
    videoRef.current.srcObject = myStream;

    console.log("Streaming");
  };

  const createMyOffer = () => {
    peerConnection
      .createOffer()
      .then((offer) => {
        return peerConnection.setLocalDescription(offer);
      })
      .then(() => {
        // Send the offer to the other peer
        // alert("HERE...");
        socket.emit("offer", {
          to: remoteId.current,
          offer: peerConnection.localDescription,
        });
      })
      .catch((error) => {
        console.error("Error creating offer:", error);
      });
  };

  const createMyAnswer = async (from, offer, peerConnection) => {
    try {
      await peerConnection.setRemoteDescription(offer);
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(
        new RTCSessionDescription(answer)
      );
      // Send the answer to the other peer
      socket.emit("answer", { to: from, answer });
    } catch (error) {
      console.log("Error creating answer: ", error);
    }
  };

  const makeCall = (peerConnection) => {
    // create offer
    createMyOffer(peerConnection);
    // get answer
    // begin (add Tracks)
  };

  return (
    <div>
      <div>Room</div>
      <div>{localStream.current ? "STREAMING" : ""}</div>
      <div
        onClick={() => {
          alert("my id : " + myId);
        }}
      >
        show my id
      </div>
      <p>My ID: {myId.current || ""}</p>
      <p>Others ID: {remoteId.current || ""}</p>
      <div>{user ? <p className="text-2xl font-bold">{user}</p> : ""}</div>
      <div className="flex gap-4">
        <button onClick={sendMsg} className=" btn-primary btn-md ">
          Send Message
        </button>
        <button onClick={joinRoom} className=" btn-primary btn-md ">
          Join room
        </button>

        {remoteId && (
          <button onClick={makeCall} className=" btn-primary btn-md ">
            Make CALL
          </button>
        )}
      </div>
      <div className="flex gap-6 mt-5">
        <div className="border border-black w-fit">
          <p>Local Stream</p>
          <video
            ref={videoRef}
            className="w-[400px] h-[200px]"
            autoPlay
            muted
            playsInline
          />
        </div>

        <div className="border border-black w-fit">
          {true && (
            <div>
              <p>Remote Stream</p>
              <video
                ref={remoteVideoRef}
                className="w-[400px] h-[200px]"
                autoPlay
                muted
                playsInline
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
