import test from './../test/index.js';

export default function exec(algorithms, ds, chef){

    if(algorithms & 1){
        test.algorithms.sort.full();
    }

    if(algorithms & 2){
        test.algorithms.greedy.full();
    }

    if(algorithms & 4){
        test.algorithms.dynamic.full();
    }

    if(algorithms & 8){
        test.algorithms.backtracking.full();
    }

    if(ds & 1){
        test.ds.array.full();
    }

    if(ds & 2){
        test.ds.singlyLinkedList.full();
    }

    if(ds & 4){
        test.ds.queue.full();
    }

    if(ds & 8){
        test.ds.stack.full();
    }

    if(ds & 16){
        test.ds.binaryTree.full();
    }

    if(chef & 1){
        test.chef.easy.full();
    }

}