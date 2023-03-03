//@Autor {Felipe Fernandes}
import { connectDb } from "./connection.js";

export default async function checkCivilization(id, type) {
    try {
        let civilizationId;
        switch (type) {
            case "civilization":
                civilizationId = id;
                break;
            case "history":
                const historyResponse = await connectDb(
                    `SELECT civilization_id FROM history_events
                    WHERE event = $1`,
                    [id]
                );
                civilizationId = historyResponse[0].civilization_id;
                break;
            case "gallery":
                const galleryResponse = await connectDb(
                    `SELECT civilization_id FROM gallery
                    WHERE image_unique_id = $1`,
                    [id]
                );
                civilizationId = galleryResponse[0].civilization_id;
                break;
        }

        return civilizationId;
    } catch (error) {
        throw error;
    }
}
