import Breadcrumbs from "./Breadcrumbs";
import { StoreService } from "../../state/StoreService.js";

export const mapStateToProps = (state) => ({
  breadcrumbs: state.products.breadcrumbs,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

const BreadcrumbsContainer = StoreService.connect(
  mapStateToProps,
  // mapDispatchToProps
)(Breadcrumbs);
export default BreadcrumbsContainer;
