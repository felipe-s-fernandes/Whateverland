import regionsServices from "../services/regions.js";

const TAG = "Regions Controller: ";

export const getRegions = async (req, res) => {
    console.log(TAG, "getRegions() from " + req.connection.remoteAddress);
    console.time("getRegions()");

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Call to service
        const serviceResponse = await regionsServices.getRegions();

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("getRegions()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getRegions()");
    }
};

export const getRegionById = async (req, res) => {
    console.log(TAG, "getRegionById() from " + req.connection.remoteAddress);
    console.time("getRegionById()");

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };
    const regionId = req.params.regionid;

    if (isNaN(regionId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Region id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("getRegionById()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await regionsServices.getRegionById(regionId);

        response.message = `Region ${regionId} retrieved successfully.`;
        response.data = serviceResponse;
        res.status(200).json(response);
        console.timeEnd("getRegionById()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getRegionById()");
    }
};

const regionsController = {
    getRegions: getRegions,
    getRegionById: getRegionById,
};

export default regionsController;
