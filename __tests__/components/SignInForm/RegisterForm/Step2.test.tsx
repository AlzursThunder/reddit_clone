import Step2 from "@/components/SignInForm/RegisterForm/Step2";
import store from "@/redux/store";
import { cleanup, render } from "@testing-library/react";

const mockHandleChange = jest.fn();

const { registerForm } = store.getState().signInForm;
const errMsgsInit = {
	username: null,
	password: null,
	basic: null
}
afterEach(cleanup);

describe("Second Step", () => {
	describe("Renders", () => {
		it("Should render username & password inputs", () => {
			const { getByTestId} = render(<Step2 handleChange={mockHandleChange} password="" username="" errorMessages={{...errMsgsInit}} />);
			const usernameInput = getByTestId("step2-input-username");
			const passwordInput = getByTestId("step2-input-password");
			expect(usernameInput).toBeInTheDocument();
			expect(passwordInput).toBeInTheDocument();
		})

		it.todo("Should render basic error message")
		it.todo("Should render username error message")
		it.todo("Should render password error message")
	});
});
