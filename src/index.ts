import {GameManager} from './store';
import { startLogger } from './log';

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        gameId: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000);
