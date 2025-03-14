const planets = {
    mercury: { diameter: 4879, mass: 0.055, moons: 0, orbit: 57.9, year: 88, temp: 167 },
    venus: { diameter: 12104, mass: 0.815, moons: 0, orbit: 108.2, year: 225, temp: 464 },
    earth: { diameter: 12742, mass: 1, moons: 1, orbit: 149.6, year: 365, temp: 15 },
    mars: { diameter: 6779, mass: 0.107, moons: 2, orbit: 227.9, year: 687, temp: -63 },
    jupiter: { diameter: 139820, mass: 317.8, moons: 79, orbit: 778.5, year: 4333, temp: -145 },
    saturn: { diameter: 116460, mass: 95.2, moons: 83, orbit: 1433.5, year: 10759, temp: -178 },
    uranus: { diameter: 50724, mass: 14.5, moons: 27, orbit: 2872.5, year: 30687, temp: -224 },
    neptune: { diameter: 49244, mass: 17.1, moons: 14, orbit: 4495.1, year: 60190, temp: -218 }
};

function updateComparison() {
    const p1 = document.getElementById("planet1").value;
    const p2 = document.getElementById("planet2").value;

    document.getElementById("planet-img1").src = `imgs/${p1}.png`;
    document.getElementById("planet-img2").src = `imgs/${p2}.png`;

    compare("diameter", planets[p1].diameter, planets[p2].diameter);
    compare("mass", planets[p1].mass, planets[p2].mass);
    compare("moons", planets[p1].moons, planets[p2].moons);
    compare("orbit", planets[p1].orbit, planets[p2].orbit);
    compare("year", planets[p1].year, planets[p2].year);
    compare("temp", planets[p1].temp, planets[p2].temp);
}

function compare(property, value1, value2) {
    document.getElementById(`${property}1`).innerText = value1;
    document.getElementById(`${property}2`).innerText = value2;

    const comparisonSign = document.getElementById(`arrow-${property}`);
    if (value1 > value2) {
        comparisonSign.innerHTML = " > ";
        comparisonSign.style.color = "red";
    } else if (value1 < value2) {
        comparisonSign.innerHTML = " < ";
        comparisonSign.style.color = "green";
    } else {
        comparisonSign.innerHTML = " = ";
        comparisonSign.style.color = "gray";
    }
}

document.getElementById("planet1").addEventListener("change", updateComparison);
document.getElementById("planet2").addEventListener("change", updateComparison);

updateComparison();
