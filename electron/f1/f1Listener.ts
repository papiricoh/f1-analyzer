import { F122UDP } from "f1-22-udp";
import { ipcMain } from 'electron';

const f122: F122UDP = new F122UDP();

function startListening(win) {
  f122.start();

  f122.on('carTelemetry', function(data) {
    win.webContents.send('motion-data', data);
  });
  f122.on('carStatus', function(data) {
    
  });
}

export default startListening;