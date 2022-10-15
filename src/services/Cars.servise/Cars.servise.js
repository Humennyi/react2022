import {axiosService} from "../Axios.service/Axios.service";

import {urls} from "../../config/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`,data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}