import ffmpegPath from 'ffmpeg-static';
import { exec } from 'child_process';
import path from 'path';

const inputFile = 'video/La_Fine_della_Programmazione_.mp4';
const outputFile = 'video/La_Fine_della_Programmazione_compressed.mp4';

const command = `"${ffmpegPath}" -i "${inputFile}" -vcodec libx264 -crf 28 "${outputFile}"`;

console.log(`Esecuzione comando: ${command}`);

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Errore durante la compressione: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`FFmpeg output: ${stderr}`);
    }
    console.log('Compressione completata con successo!');
});
