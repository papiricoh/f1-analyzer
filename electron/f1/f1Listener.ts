import { F122UDP } from "f1-22-udp";
import { ipcMain } from 'electron';

const f122: F122UDP = new F122UDP();

function startListening(win) {
  f122.start();

  f122.on('motion', function(data) {
    win.webContents.send('motion-data', data);
  });
  f122.on('carTelemetry', function(data) {
    win.webContents.send('telemetry-data', data);
  });
  f122.on('participants', function(data) {
    win.webContents.send('participants-data', data);
  });
  f122.on('lapData', function(data) {
    win.webContents.send('lapData-data', data);
  });
  f122.on('carStatus', function(data) {
    win.webContents.send('carStatus-data', data);
  });
  f122.on('carDamage', function(data) {
    win.webContents.send('carDamage-data', data);
  });
  f122.on('event', function(data) {
    win.webContents.send('event-data', data);
  });
}

export default startListening;