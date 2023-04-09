import java.util.*;
public class a
{
	public static void main(String args[]) {
		Scanner scanner=new Scanner(System.in);
		
		int h=scanner.nextInt();  // Array size
		
		String a[] = new String[h]; // Array declare
		
		for(int i=0;i<h;i++) {
	       a[i] = scanner.nextLine();       // Array inputs
		}
		
		for(int i=0;i<h;i++) {
			System.out.print(a[i]);
		}
	}
}