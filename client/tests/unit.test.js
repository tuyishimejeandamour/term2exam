import { render, screen } from "@testing-library/react";
import Gura from '../src/components/pages/gura'
import Reba from '../src/components/pages/reba'

describe("buying eleclicity",()=>{
    const buyPageSetup = () => {
        const utils = render(<Gura />);
        const meterInput = utils.getByPlaceholderText("number");
        const amountInput = utils.getByPlaceholderText(/Amount/i);
        return {
          meterInput,
          amountInput,
          ...utils,
        };
      };
      
      const balancePageSetup = () => {
        const utils = render(<Reba/>);
        const meterInput = utils.getByPlaceholderText("number");
        const amountInput = utils.getByPlaceholderText(/Amount/i);
        return {
          meterInput,
          amountInput,
          ...utils,
        };
      };
    it("should show an error > amount input", () => {
        const { meterInput } = buyPageSetup();
        fireEvent.change(input, { target: { value: "789" } });
        expect(
          screen.getByText("Amount must be a % of 100 = 0 and < 182,500")
        ).toBeInTheDocument();
      });
      
      it("should show an error below meter number input", () => {
        const { meterInput } = buyPageSetup();
        fireEvent.change(input, { target: { value: "234" } });
        expect(
          screen.getByText("Invalid meter, only 6 digits accepted")
        ).toBeInTheDocument();
      });
      
      it("should show an error below meter number input", () => {
        const { meterInput } = balancePageSetup();
        fireEvent.change(input, { target: { value: "567" } });
        expect(screen.getByText("Your meter is invalid")).toBeInTheDocument();
      });
})

