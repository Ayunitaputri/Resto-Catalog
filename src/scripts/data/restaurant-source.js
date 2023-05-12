import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async getListResto() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getdetailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoDbSource;
