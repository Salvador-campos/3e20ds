class Graph
{
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (let i = 0; i < this.vertices; i++) 
            this.adj[i] = [];
    }

addEdge(v, w)  {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

showGraph() {
        for (let i = 0; i < this.vertices; ++i)  {
            let putstr = "";
            putstr += (i + " -> ");

            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) 
                {
                    putstr += (this.adj[i][j] + ' ');
                }
            }
            console.log(putstr);
        }
    }

hasLoops()
    {
        for (let i = 0; i < this.adj.length; i++) {
            
            for (let j = 0; j < this.adj[j].length; j++) {
                let number = this.adj[i][j];

                if(number === this.adj[i][j+1] && number != undefined)
                {
                    console.log("hasLoops -> true");
                    return true;
                }
            }
        }
console.log("tiene ciclo => false");
     return false;
    }
}

            grefg = new Graph(5);
            grefg.addEdge(0,1);
            grefg.addEdge(1,2);
            grefg.addEdge(2,3);
            grefg.addEdge(3,4);
            grefg.addEdge(4,2);
            grefg.showGraph();
            grefg.hasLoops();