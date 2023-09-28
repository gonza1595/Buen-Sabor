package com.example.tp_final;

import com.example.tp_final.Entidades.*;
import com.example.tp_final.Enumeraciones.*;
import com.example.tp_final.Repositorios.ClienteRepository;
import com.example.tp_final.Repositorios.DomicilioRepository;
import com.example.tp_final.Repositorios.EmpleadoRepository;
import com.example.tp_final.Repositorios.EstadoUsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TpFinalApplication {

    public static void main(String[] args) {
        SpringApplication.run(TpFinalApplication.class, args);
    }
    @Bean
    public CommandLineRunner run(ClienteRepository clienteRepository, DomicilioRepository domicilioRepository, EstadoUsuarioRepository estadoUsuarioRepository, EmpleadoRepository empleadoRepository) {
        return (args) -> {
            //Se crean 3 clientes
            Cliente cliente1 = new Cliente("Dalia", "Adam", "123456789","DaliaAdam@gmail.com","password");
            EstadoUsuario estadoUsuario1 = new EstadoUsuario(Estado.Alta);//Al instanciar un usuario se crea un estado con alta por defecto
            estadoUsuario1.setUsuario(cliente1);

            Cliente cliente2 = new Cliente("Trisha", "Gee", "123456789","TrishaGee@gmail.com","password");
            EstadoUsuario estadoUsuario2 = new EstadoUsuario(Estado.Alta);
            estadoUsuario2.setUsuario(cliente2);
            Cliente cliente3 = new Cliente("Helen", "Scott", "123456789","HelenScott@gmail.com","password");
            EstadoUsuario estadoUsuario3 = new EstadoUsuario(Estado.Alta);
            estadoUsuario3.setUsuario(cliente3);


            //Se persiste las entidades cliente
            clienteRepository.save(cliente1);
            clienteRepository.save(cliente2);
            clienteRepository.save(cliente3);
            estadoUsuarioRepository.save(estadoUsuario1);
            estadoUsuarioRepository.save(estadoUsuario2);
            estadoUsuarioRepository.save(estadoUsuario3);

            //Se recuperan clientes de db y se muestran sus datos
            System.out.println("Clientes");
            Iterable<Cliente> clientesRecuperados = clienteRepository.findAll();
            for (Cliente clienteRecuperado: clientesRecuperados) {
                System.out.println("ClienteId: "+ clienteRecuperado.getId());
                System.out.println("Nombre: "+clienteRecuperado.getNombre());
                System.out.println("Apellido: "+clienteRecuperado.getApellido());
                System.out.println("Telefono: "+clienteRecuperado.getTelefono());
                System.out.println("Email: "+clienteRecuperado.getEmail());
                System.out.println("----------------------------------");
            }
            //Se crean 4 domicilios  y se asocian a los clientes
            Domicilio Domicilio1 = new Domicilio("234","Belgrano","5534","2","1", Localidad.Ciudad,cliente1);
            Domicilio Domicilio2 = new Domicilio("324","Colon","5515","12","3", Localidad.Godoy_Cruz,cliente2);
            Domicilio Domicilio3 = new Domicilio("275","Libertad","5611","-","-", Localidad.Guaymallen,cliente3);
            Domicilio Domicilio4 = new Domicilio("542","Roca","5611","-","-", Localidad.Guaymallen,cliente3); //El cliente 3 tiene 2 domicilios asociados

        };
    }
}
