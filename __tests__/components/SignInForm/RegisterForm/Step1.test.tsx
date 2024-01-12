import Step1 from "@/components/SignInForm/RegisterForm/Step1";
import store from "@/redux/store";
import { renderWithProviders } from "@/utils/utils-for-tests";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

const mockHandleChange = jest.fn();

const { registerForm } = store.getState().signInForm;

afterEach(cleanup);

describe("First Step", () => {
	describe("Render", () => {
		it("should render the first step", () => {
			const { getByTestId } = render(
				<Step1
					email=""
					handleChange={mockHandleChange}
					errorMessages={{ email: null }}
				>
					""
				</Step1>
			);
			const input = getByTestId("step1-input-email");
			expect(input).toBeInTheDocument();
		});

		it("should render the error message if the email is invalid", () => {
			const { getByTestId } = render(
				<Step1
					email="test@@d.d"
					handleChange={mockHandleChange}
					errorMessages={{
						email: {
							message: "Invalid email address",
							kind: "invalid",
							name: "email",
							path: "email",
							properties: {
								type: "string",
								message: "Invalid email address",
								path: "email",
							},
						},
					}}
				>
					""
				</Step1>
			);
			const errAlertEl = getByTestId("error-email");
			expect(errAlertEl).toBeInTheDocument();
			expect(errAlertEl).toHaveTextContent("Invalid email address");
		});
	});

	describe("User interaction", () => {
		it("should call the handleChange function when the input changes", async () => {
			const { getByTestId } = renderWithProviders(
				<Step1
					email={registerForm.email}
					handleChange={mockHandleChange}
					errorMessages={{ email: null }}
				>
					""
				</Step1>
			);
			const input = getByTestId("step1-input-email");

			fireEvent.change(input, { target: { value: "test@test.com" } });

			waitFor(() => {
				expect(mockHandleChange).toHaveBeenCalledTimes(1);
			});
		});

		it("should update the email state when the input changes", async () => {
			const { getByTestId } = renderWithProviders(
				<Step1
					email={registerForm.email}
					handleChange={mockHandleChange}
					errorMessages={{ email: null }}
				>
					""
				</Step1>
			);
			const input = getByTestId("step1-input-email");

			fireEvent.change(input, { target: { value: "test@test.com" } });

			waitFor(() => {
				expect(input).toHaveValue("test@test.com");
				expect(registerForm.email).toBe("test@test.com");
			});
		});
	});
});
