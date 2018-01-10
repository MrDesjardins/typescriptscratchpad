type Alias1 = number | string;
const al1: Alias1 = 1;
const al2: Alias1 = "1";
type Alias2 = Alias1 | boolean;
const al3: Alias2 = 2;
const al4: Alias2 = "2";
const al5: Alias2 = false;
interface IA1 { m: string };
interface IA2 { n: number };
type Alias3 = IA1 & IA2;
const al6: Alias3 = { m: "3", n: 3 };