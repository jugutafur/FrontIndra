package EntremientoJava;

import java.util.Scanner;

import javax.swing.JOptionPane;

public class Algoritm {

	public static void main(String[] args) {
		int base = 0;
		int exponente = 0;
		System.out.println("Funciona");
		
		base = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la base"));
		exponente = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la base"));
		
		//int resultado=(int)Math.pow(base, exponente);
		
		System.out.println("el resultado es = "+resultado);
		
		int resutado = Operacion.sum(base, exponente);
	}

}

class Operacion{
	
	public static int sum(int base, int exponente){
		
		int salida =0 ;
		
		for (int i =0; i<exponente; i++) {
			salida = +base;
		}
		return salida;
	}
}
