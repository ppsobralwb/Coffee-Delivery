import { CartContainer } from "./styles"
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export default function Cart() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

    return (
        <FormProvider {...confirmOrderForm}>
          <CartContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
            <CompleteOrderForm />
            <SelectedCoffees />
          </CartContainer>
        </FormProvider>
    )
}