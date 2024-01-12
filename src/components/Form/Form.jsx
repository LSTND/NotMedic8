import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { actionDelivery,actionClearBag } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validationShema";
import "./Form.scss";
import Input from "./Input/Input";
import Button from "../Button";

const Form = () => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.delivery);
  const bag = useSelector((state) => state.bag);
  const navigate = useNavigate();

  const formikForm = useFormik({
    initialValues: { ...delivery },
   validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(actionDelivery({ user: values, products: bag }));
      console.log(dispatch(actionDelivery({ user: values, product: bag })));
      dispatch(actionClearBag([]));
      navigate("/");
      resetForm();
    },
  });

  return (
      <div className="form">
      <form onSubmit={formikForm.handleSubmit}>
        <fieldset className="form-block">
          <Input
            {...formikForm.getFieldProps("name")}
            type="text"
            classNames="input"
            name="name"
            placeholder="name"
            label={"Name"}
            error={formikForm.errors.name && formikForm.touched.name}
            errorMessage={formikForm.errors.name}
          />

          <Input
            {...formikForm.getFieldProps("lastName")}
            type="text"
            classNames="input"
            name="lastName"
            placeholder="lastName"
            label={"LastName"}
            error={formikForm.errors.lastName && formikForm.touched.lastName}
            errorMessage={formikForm.errors.lastName}
          />

          <Input
            {...formikForm.getFieldProps("age")}
            type="text"
            classNames="input"
            name="age"
            placeholder="age"
            label={"Age"}
            error={formikForm.errors.age && formikForm.touched.age}
            errorMessage={formikForm.errors.age}
          />

          <Input
            {...formikForm.getFieldProps("address")}
            type="text"
            classNames="input"
            name="address"
            placeholder="address"
            label={"Address"}
            error={formikForm.errors.address && formikForm.touched.address}
            errorMessage={formikForm.errors.address}
          />

          <Input
            {...formikForm.getFieldProps("phone")}
            type="text"
            classNames="input"
            name="phone"
            placeholder="phone"
            label={"Phone"}
            error={formikForm.errors.phone && formikForm.touched.phone}
            errorMessage={formikForm.errors.phone}
        />
        <Button
          text={"Checkout"}
          type={'button'}
          backgroundColor={"#ffff"}
          className="btn"  onClick={formikForm.handleSubmit}/>
          </fieldset>
        </form>
      </div>

  );
};
export default Form;
