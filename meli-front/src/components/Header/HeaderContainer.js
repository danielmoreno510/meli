import Header from "./Header";
import { fetchProductList } from "../../state/actions";
import { StoreService } from "../../state/StoreService.js";

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (search) => {
      dispatch(fetchProductList(search));
    }
  };
};
const HeaderContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
export default HeaderContainer;
