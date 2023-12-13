// Sample player data
const playerData2 = [

    {name:'Joel Embiid', score: 3.2},
    {name:'De’Aaron Fox', score: 1},
    {name:'Tyrese Maxey', score: 2.9},
    {name:'Luka Doncic',score: 2.6},
    {name:'Nikola Jokic', score: 4.6},
    {name:'Donovan Mitchell', score: 1},
    {name:'Giannis Antetokounmpo', score: 2.7},
    {name:'Shai Gilgeous-Alexander', score: 3.8},
    {name:'Stephen Curry', score: 2.2},
    {name:'Jalen Brunson', score: 2.8},
    {name:'Jayson Tatum', score: 2.6},
    {name:'Kevin Durant', score: 2.6},
    {name:'Damian Lillard', score: 2.3},
    {name:'Lebron James', score: 2.1}
];

// Sample images path
const imagePathMap2 = {
    'Jimmy Butler': 'NBA Pictures/Jimmy_Butler_Picture.jpg',
    'Joel Embiid': 'NBA Pictures/Joel_Embiid_Picture.jpg',
    'De’Aaron Fox': 'NBA Pictures/De’Aaron_Fox_Picture.jpg',
    'Tyrese Maxey': 'NBA Pictures/Tyrese_Maxey_Picture.jpg',
    'Luka Doncic': 'NBA Pictures/Luka_Doncic_Picture.jpg',
    'Nikola Jokic': 'NBA Pictures/Nikola_Jokic_Picture.jpg',
    'Donovan Mitchell': 'NBA Pictures/Donovan_Mitchell_Picture.jpg',
    'Giannis Antetokounmpo': 'NBA Pictures/Giannis_Antetokounmpo_Picture.jpg',
    'Shai Gilgeous-Alexander': 'NBA Pictures/Shai_Gilgeous-Alexander_Picture.jpg',
    'Ja Morant': 'NBA Pictures/Ja_Morant_Picture.jpg',
    'Stephen Curry': 'NBA Pictures/Stephen_Curry_Picture.jpg',
    'Jalen Brunson': 'NBA Pictures/Jalen_Brunson_Picture.jpg',
    'Jayson Tatum': 'NBA Pictures/Jayson_Tatum_Picture.jpg',
    'Kevin Durant': 'NBA Pictures/Kevin_Durant_Picture.jpg',
    'Damian Lillard': 'NBA Pictures/Damian_Lillard_Picture.jpg',
    'Lebron James': 'NBA Pictures/LeBron_James_Picture.jpg'
   
};

// Set up the chart
const diameter2 = 600;

const bubble2 = d3.pack()
    .size([diameter, diameter])
    .padding(1.5);

// Create the SVG element
const svg2 = d3.select("#bubble-chart-Keyshawn")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

let statsMap2; 

d3.csv("Datasets/all_nba_seasons_revised.csv").then(function (statsData) {
    // Convert statsData to a map for easy lookup
    statsMap2 = new Map(statsData.map(entry => [entry.Player, entry]));  

    // Generate the chart
    const root = d3.hierarchy({ children: playerData2 })
        .sum(function (d) { return d.score || 1; });

    const nodes2 = bubble2(root).descendants(); 

    const node = svg2.selectAll(".node")
        .data(nodes2)
        .enter()
        .filter(d => !d.children)
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("circle")
        .attr("r", function (d) { return d.r; })
        .style("fill", "lightblue")
        .on("click", function (d) {
            showPlayerImage(d.data.name);
        });

    node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function (d) { return d.data.name; })
        .attr("class", "player-name")
        .on("click", function (d) {
            showPlayerImage(d.data.name);
        });

    function showPlayerImage(playerName) {
        const modal = document.getElementById('player-modal');
        const modalImage = document.getElementById('modal-image');
        const modalStats = document.getElementById('modal-stats');

        // Retrieve player data from the map
        const playerData2 = statsMap2.get(playerName);

        if (playerData2) {
            const imagePath = imagePathMap2[playerName];
            modalImage.src = imagePath;

            const formattedStats = Object.entries(playerData2)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n');

            // Display player stats
            modalStats.textContent = `Stats:\n${formattedStats}`;
        } else {
            modalStats.textContent = 'Player data not available';
        }

        modal.style.display = 'block';

        // Close modal on click outside the image
        modal.onclick = function () {
            modal.style.display = 'none';
        };
    }
});