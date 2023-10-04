import axios from "axios";
const url = "/api/post";

export default class API {
  static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getPostsByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }
  static async getAllPost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
  static async deletePostsByID(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
