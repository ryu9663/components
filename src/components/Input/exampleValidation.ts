//example
export const exampleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value === "") return "";
  if (e.target.value.length > 5) return "5자 이상 입력할 수 없습니다.";
  else return "";
};
