import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculationModelInterface } from '../../model/calculation-model.interface';
import { CalculatorServiceService } from '../../services/calculator-service.service'


@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {
  result;

  calculatorForm = new FormGroup({
    num1: new FormControl(2, Validators.required),
    num2: new FormControl('', Validators.required),
    operation: new FormControl('')
  });

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const calculationInterface: CalculationModelInterface = {
      num1: this.calculatorForm.controls.num1.value,
      num2: this.calculatorForm.controls.num2.value,
      operation: this.calculatorForm.controls.operation.value
    }
    console.log(calculationInterface);
    this.calculatorService.calculate(calculationInterface).subscribe(response =>
      this.result = response.result);
  }
}
