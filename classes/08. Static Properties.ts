
/**
 * Static Properties
 */

class Util {
  static point = { x: 0, y: 0 };
  static echo(message) {
    console.log(message);
  }
}

class Util2 extends Util {}

Util.point; // { x: 0, y: 0 }
Util.echo('hihi'); // hihi

Util2.point; // { x: 0, y: 0 }
Util2.echo('hello'); // hello

Util2.point.x = 1;

Util2.point; // { x: 1, y: 0 }
Util.point; // { x: 1, y: 0 }