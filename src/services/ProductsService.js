import GenericService from "./GenericService";

class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => {
    console.log(data);
    return this.post("products", data);
  };

  getProducts = (page = 1, perPage = 10) => {
    return this.get("products?page=" + page + "&perPage=" + perPage);
  };

  deleteProduct = (id) => {
    return this.delete("products/" + id);
  };
  updateProduct = (id, data) => {
    return this.put("products/" + id, data);
  };

  getSingleProduct = (id) => {
    return this.get("products/" + id);
  };
}

let productService = new ProductsService();
export default productService;
