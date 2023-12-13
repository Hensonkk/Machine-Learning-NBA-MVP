// Sample player data
const playerData = [
    {name: 'Jimmy Butler', score: 1},
    {name:'Joel Embiid', score: 1},
    {name:'De’Aaron Fox', score: 1},
    {name:'Devin Booker', score: 1},
    {name:'Luka Doncic',score: 1},
    {name:'Nikola Jokic', score: 1},
    {name:'Donovan Mitchell', score: 1},
    {name:'Giannis Antetokounmpo', score: 1},
    {name:'Shai Gilgeous-Alexander', score: 1},
    {name:'Ja Morant', score: 1},
    {name:'Stephen Curry', score: .6},
    {name:'Jalen Brunson', score: .5},
    {name:'Jayson Tatum', score: .3}
];

// Sample images path
const imagePathMap = {
    'Jimmy Butler': 'NBA Pictures/Jimmy_Butler_Picture.avif',
    'Joel Embiid': 'NBA Pictures/Joel_Embiid_Picture.jpg',
    'De’Aaron Fox': 'NBA Pictures/De’Aaron_Fox_Picture.webp',
    'Devin Booker': 'NBA Pictures/Devin_Booker_Picture.jpg',
    'Luka Doncic': 'NBA Pictures/Luka_Doncic_Picture.webp',
    'Nikola Jokic': 'NBA Pictures/Nikola_Jokic_Picture.jpg',
    'Donovan Mitchell': 'NBA Pictures/Donovan_Mitchell_Picture.jpg',
    'Giannis Antetokounmpo': 'NBA Pictures/Giannis_Antetokounmpo_Picture.jpg',
    'Shai Gilgeous-Alexander': 'NBA Pictures/Shai_Gilgeous-Alexander_Picture.webp',
    'Ja Morant': 'NBA Pictures/Ja_Morant_Picture.webp',
    'Stephen Curry': 'NBA Pictures/Stephen_Curry_Picture.jpg',
    'Jalen Brunson': 'NBA Pictures/Jalen_Brunson_Picture.jpg',
    'Jayson Tatum': 'NBA Pictures/Jayson_Tatum_Picture.avif',
    // Add paths for other players
};

// Set up the chart
const diameter = 600;

const bubble = d3.pack()
    .size([diameter, diameter])
    .padding(1.5);

// Create the SVG element
const svg = d3.select("#bubble-chart")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.csv("Datasets/all_nba_seasons_revised.csv").then(function (statsData) {
    // Convert statsData to a map for easy lookup
    const statsMap = new Map(statsData.map(entry => [entry.Player, entry]));

    // Generate the chart
    const root = d3.hierarchy({ children: playerData })
        .sum(function (d) { return d.score || 1; });

    const nodes = bubble(root).descendants();

    const node = svg.selectAll(".node")
        .data(nodes)
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
        const playerData = statsMap.get(playerName);

        if (playerData) {
            const imagePath = imagePathMap[playerName];
            modalImage.src = imagePath;
            
            // Format the stats for display (replace with your desired formatting)
            const formattedStats = Object.entries(playerData)
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