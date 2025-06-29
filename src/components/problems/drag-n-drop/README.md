# Drag and Drop Notes

This project implements a simple drag-and-drop functionality for notes within a container using React. Users can click and drag notes to reposition them within the defined area.

## Project Structure

- **Container.jsx**: The main component that manages the state of the notes, handles mouse events for dragging, and renders the `Note` components.
- **Note.jsx**: Defines the `Note` component, representing individual notes that can be dragged. It accepts props for the note's data and mouse event handlers.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd drag-n-drop
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Usage

1. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

2. Open your browser and go to `http://localhost:3000` (or the port specified in your configuration).

3. You can now click and drag the notes within the container to reposition them.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is open-source and available under the [MIT License](LICENSE).