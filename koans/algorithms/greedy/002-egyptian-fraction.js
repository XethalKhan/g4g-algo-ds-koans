function solve(nr, dr){

    let sol = [];

    while(true){

        if(nr == 0 || dr == 0){
            break;
        }

        if(dr % nr == 0){
            sol.push({nr: 1, dr: (dr / nr)});
            break;
        }

        if (nr%dr == 0)
        {
            sol.push({nr: (nr/dr), dr: 1});
            break;
        }

        if (nr > dr)
        {
            sol.push(Math.floor(nr/dr));
            nr = nr % dr;
            continue;
        }

        let n = Math.floor(dr/nr) + 1;
        sol.push({nr: 1, dr: n});

        nr = nr * n - dr;
        dr = n * dr;

    }

    return sol;

}

export default solve;