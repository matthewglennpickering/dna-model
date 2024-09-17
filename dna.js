// Setup scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// DNA parameters
const helixRadius = 5;
const helixHeight = 40;
const helixTurns = 10;
const basePairDistance = 1.6; // Distance between base pairs
const basePairCount = Math.floor(helixHeight / basePairDistance);
const rotationPerBasePair = (2 * Math.PI * helixTurns) / basePairCount;

// Materials
const materialA = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Adenine
const materialT = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Thymine
const materialC = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Cytosine
const materialG = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Guanine
const strandMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });

// Function to create a base pair (two cylinders and a connecting line)
function createBasePair(x, y, z, angle) {
    const cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 32), materialA);
    const cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 32), materialT);

    // Position cylinders to form base pairs
    const x1 = x + Math.cos(angle) * helixRadius;
    const z1 = z + Math.sin(angle) * helixRadius;
    const x2 = x - Math.cos(angle) * helixRadius;
    const z2 = z - Math.sin(angle) * helixRadius;

    cylinder1.position.set(x1, y, z1);
    cylinder2.position.set(x2, y, z2);

    scene.add(cylinder1);
    scene.add(cylinder2);

    // Connect the cylinders with a line
    const baseGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y, z1),
        new THREE.Vector3(x2, y, z2),
    ]);

    const baseLine = new THREE.Line(baseGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
    scene.add(baseLine);
}

// Function to create DNA strands
function createStrand() {
    for (let i = 0; i < basePairCount; i++) {
        const angle = i * rotationPerBasePair;
        const y = (i * basePairDistance) - helixHeight / 2;

        // Create base pairs
        createBasePair(0, y, 0, angle);
    }
}

// Create the DNA double helix
createStrand();

// Set camera position
camera.position.z = 60;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.01; // Rotate the scene for a better view
    renderer.render(scene, camera);
}
animate();
