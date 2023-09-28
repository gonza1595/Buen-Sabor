package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Cliente;
import com.example.tp_final.Entidades.Domicilio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomicilioRepository extends CrudRepository<Domicilio,String> {
}
