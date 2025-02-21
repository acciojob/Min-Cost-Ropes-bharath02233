function mincost(arr)
{ 
   if (arr.length === 1) return 0; // Only one rope, no cost to connect

    let minHeap = new MinHeap();
    for (let num of arr) minHeap.insert(num);

    let totalCost = 0;
    while (minHeap.size() > 1) {
        let first = minHeap.extractMin();
        let second = minHeap.extractMin();
        let cost = first + second;
        totalCost += cost;
        minHeap.insert(cost);
    }

    return totalCost;
  
}

module.exports=mincost;
