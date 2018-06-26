const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function name (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    //this.type = 'king';

    this.canGo = pos => {

        /**
         *  Input:
         *      a array, the position of the chess
         *      'pos' is a array ,refer to the position
         *
         *  Output:
         *      a array, the positions the chess can go
         *      each element is a position like (x,y)
         */

        let arr = arr || [];

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        let is_cango = coordinate => (map[coordinate[0]][coordinate[1]] !== null && map[coordinate[0]][coordinate[1]].color !== this.color);

        /* *
         * cases of canGo
         * 8 cases in total
         * */

         /**
          *  if there is a map(N is the knight):
          *  x 1 x 2 x
          *  3 x x x 4
          *  x x N x x
          *  5 x x x 6
          *  x 7 x 8 x
          * ( number means knight can go to these places)
          **/

         // case 1
         if (x-1>=0 && y+2<=7 && is_cango([x-1,y+2])) {
             arr.push([x-1,y+2]);
         }

         //case 2
         if (x+1<=7 && y+2<=7 && is_cango([x+1,y+2])) {
             arr.push([x+1,y+2]);
         }

         //case 3
         if (x-2>=0 && y+1<=7 && is_cango([x-2,y+1])) {
             arr.push([x-2,y+1]);
         }

         //case 4
         if (x+2<=7 && y+1<=7 && is_cango([x+2,y+1])) {
             arr.push([x+2,y+1]);
         }

         //case 5
         if (x-2>=0 && y-1>=0 && is_cango([x-2,y-1])) {
             arr.push([x-2,y-1]);
         }

         //case 6
         if (x+2<=7 && y-1>=0 && is_cango([x+2,y-1])) {
             arr.push([x+2,y-1]);
         }

         // case 7
         if (x-1>=0 && y-2>=0 && is_cango([x-1,y-2])) {
             arr.push([x-1,y-2]);
         }

         // case 8
         if (x+1<=7 && y-2>=0 && is_cango([x+1,y-2])) {
             arr.push([x+1,y-2]);
         }

        return arr;
    };
}