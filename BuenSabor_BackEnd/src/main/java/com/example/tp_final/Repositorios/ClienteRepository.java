package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Cliente;
import com.example.tp_final.Entidades.EstadoUsuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente,Long> {

}
