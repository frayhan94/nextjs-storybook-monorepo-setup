/**
 * @todo implement rows and cols
 */
enum InputType {
  Text = 'text',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
}

type ItemsType = {
  label: string;
  type: InputType;
  name: string;
  placeholder?: string;
};
type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  items?: Array<ItemsType>;
  title?: string;
};

type RenderFieldType = {
  type: InputType;
  name: string;
};
const RenderField = ({ type }: RenderFieldType) => {
  if (type === InputType.Text) {
    return (
      <div>
        <input type={'text'} />
      </div>
    );
  }
  if (type === InputType.RADIO) {
    return (
      <div>
        <input type={'radio'} />
      </div>
    );
  }
  if (type === InputType.CHECKBOX) {
    return (
      <div>
        <input type={'text'} />
      </div>
    );
  }
  if (type === InputType.SELECT) {
    return (
      <div>
        <input type={'text'} />
      </div>
    );
  }
};
export const Form = ({ onSubmit, onCancel, items }: FormProps) => {
  return (
    <div>
      {items && items?.length > 0 && items?.map((item) => (
          <RenderField name={item.name} type={item.type} />
      ))}
      This is form
      <button onClick={onSubmit}>onSubmit</button>
      <button onClick={onCancel}>onCancel</button>
    </div>
  );
};
