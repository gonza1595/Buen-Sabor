package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Cliente;
import com.example.tp_final.Entidades.Empleado;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends CrudRepository<Empleado,Long> {
}
