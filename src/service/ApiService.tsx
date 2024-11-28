import axios from "axios";


const BASE_URL = "http://localhost:3001/";

class ApiService {

    private static axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    static async getData(endPoint: string) {
        try {
            const response = await this.axiosInstance.get(endPoint);
            return response.data;
        } catch (error) {
            console.error('Error fetching the data: ', error);
        }
    }

    static async postData(endPoint: string, data: any) {

        try {
            const res = await this.axiosInstance.post(endPoint, data);
            return res.data;
        } catch (error) {
            console.error("Error Posting Data: ", error);
        }
    }

    static async putData(endPoint: string, data: any) {

        try {
            const res = await this.axiosInstance.put(endPoint, data);
            return res.data;
        } catch (error) {
            console.error("Error Putting Data: ", error);
        }
    }

    static async deleteData(endPoint: string, data: any) {

        try {
            const res = await this.axiosInstance.delete(endPoint, data);
            return res.data;
        } catch (error) {
            console.log("Error Deleting data: ", error );
        }
    }

    static async patchData(endPoint: string, data: any) {

        try {
            const res = await this.axiosInstance.patchForm(endPoint, data);
            return res.data;
        } catch (error) {
            console.error("Error Patching data: ", error);
        }
    }
}

export default ApiService;