
# 3D DNA Double Helix Model

This project demonstrates how to create a 3D model of a human DNA double helix using JavaScript and the Three.js library. The model visualizes the double helix structure with base pairs connected by hydrogen bonds, simulating the appearance of a DNA molecule.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Code Explanation](#code-explanation)
- [Further Enhancements](#further-enhancements)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine and view the 3D DNA model in your web browser.

### Prerequisites

- A modern web browser with WebGL support (e.g., Chrome, Firefox, Edge).
- Basic knowledge of HTML, JavaScript, and 3D graphics concepts.
- Three.js library (included via CDN in this example).

### Installation

1. **Download or Clone the Repository:**

   Download the project files or clone the repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/3d-dna-model.git
   cd 3d-dna-model
   ```

2. **Create the Project Files:**

   Create an `index.html` file and a `dna.js` file in the project directory.

### Usage

1. **Open `index.html`:**

   Open the `index.html` file in any modern web browser.

2. **View the 3D DNA Model:**

   The 3D DNA double helix model should appear, rotating in the browser window.

### Customization

You can customize the DNA model by editing the following parameters in the `dna.js` file:

- **Helix Parameters:**
  - `helixRadius`: Adjusts the radius of the DNA helix.
  - `helixHeight`: Sets the total height of the DNA model.
  - `helixTurns`: Defines the number of turns in the DNA helix.
  - `basePairDistance`: Controls the distance between consecutive base pairs.

- **Materials:**
  - Modify the colors and materials for the base pairs (Adenine, Thymine, Cytosine, Guanine) to achieve different visual effects.

### Code Explanation

- **Scene, Camera, Renderer:** Basic setup to create a 3D scene using Three.js.
- **Geometry:** Cylinders and spheres represent the base pairs and helical structure of DNA.
- **Helix Construction:** The `createStrand` function positions base pairs along the y-axis while rotating them to form a double helix.
- **Rendering Loop:** The `animate` function continuously renders the scene, allowing for smooth animations.

### Further Enhancements

- Add interactive controls using the `OrbitControls` from Three.js to allow zooming, rotating, and panning.
- Implement a more detailed model by adding sugar-phosphate backbones.
- Enhance the appearance by using advanced Three.js materials and lighting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# dna-model
