import { F122UDP } from "f1-22-udp";
import { ipcMain } from 'electron';

const f122: F122UDP = new F122UDP();

function startListening() {
  f122.start();

  f122.on('motion', function(data) {
    console.log("data: " + data);
    ipcMain.emit('motion-data', data);
  });
  f122.on('carStatus', function(data) {
    
  });
}

export default startListening;