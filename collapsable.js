var chart_config = {
    chart: {
        container: "#collapsable-example",
        animateOnInit: true,

        node: {
            collapsable: true  // Enables collapsing/expanding nodes
        },
        animation: {
            nodeAnimation: "easeOutBounce",  // Animation style for nodes
            nodeSpeed: 700,  // Animation speed for nodes
            connectorsAnimation: "bounce",  // Animation style for connectors
            connectorsSpeed: 700  // Animation speed for connectors
        }
    },
    nodeStructure: {
        text: { name: "Troglodytidae" },  // Root node: "Troglodytidae" (grand_parent)
        children: [
            {
                text: { name: "Troglodytes" },  // First parent node: "Troglodytes"
                children: [
                    {
                        text: { name: "House Wren" },  // Child: "House Wren"
                        image: "http://commons.wikimedia.org/wiki/Special:FilePath/House-wren.jpg"
                    },
                    {
                        text: { name: "Eurasian Wren" },  // Child: "Eurasian Wren"
                        image: "http://commons.wikimedia.org/wiki/Special:FilePath/Eurasian%20wren%20%28Troglodytes%20troglodytes%29.jpg"
                    },
                    {
                        text: { name: "Eurasian Wren (fumigatus)" },  // Duplicate "Eurasian Wren" with specific variation
                        image: "http://commons.wikimedia.org/wiki/Special:FilePath/Troglodytes%20troglodytes%20fumigatus.JPG"
                    }
                ]
            },
            {
                text: { name: "Campylorhynchus" },  // Second parent node: "Campylorhynchus"
                children: [
                    {
                        text: { name: "Cactus Wren" },  // Child: "Cactus Wren"
                        image: "http://commons.wikimedia.org/wiki/Special:FilePath/Campylorhynchus%20brunneicapillus%2020061226.jpg"
                    }
                ]
            }
        ]
    }
};
