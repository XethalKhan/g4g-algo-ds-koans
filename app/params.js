import test from './test.js';

export default function params(){

    let algorithms = 15;
    let ds = 31;
    let chef = 7;

    if(process.argv.length != 2){

        algorithms = 0;
        ds = 0;
        chef = 0;

        if(process.argv.indexOf("--sort") > -1){
            algorithms += 1;
        }

        if(process.argv.indexOf("--greedy") > -1){
            algorithms += 2;
        }

        if(process.argv.indexOf("--dynamic") > -1){
            algorithms += 4;
        }

        if(process.argv.indexOf("--backtracking") > -1){
            algorithms += 8;
        }

        if(process.argv.indexOf("--array") > -1){
            ds += 1;
        }

        if(process.argv.indexOf("--sll") > -1){
            ds += 2;
        }

        if(process.argv.indexOf("--queue") > -1){
            ds += 4;
        }

        if(process.argv.indexOf("--stack") > -1){
            ds += 8;
        }

        if(process.argv.indexOf("--binary-tree") > -1){
            ds += 16;
        }

        if(process.argv.indexOf("--chef-easy") > -1){
            chef += 1;
        }

        if(process.argv.indexOf("--chef-medium") > -1){
            chef += 2;
        }

        if(process.argv.indexOf("--chef-hard") > -1){
            chef += 4;
        }

    }

    test(algorithms, ds, chef);

}