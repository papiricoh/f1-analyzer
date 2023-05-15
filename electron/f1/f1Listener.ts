import { F122UDP } from "f1-22-udp";
import { ipcMain } from 'electron';

const f122: F122UDP = new F122UDP();

function startListening() {
  f122.start();

  f122.on('motion', function(data) {
    console.log("data: " + data);
    // Aquí puedes procesar los datos recibidos
    ipcMain.emit('motion-data', data);
  });
}

export default startListening;