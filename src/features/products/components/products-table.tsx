import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/lib/types";

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.sku}</TableCell>
            <TableCell>${p.price}</TableCell>
            <TableCell>{p.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
