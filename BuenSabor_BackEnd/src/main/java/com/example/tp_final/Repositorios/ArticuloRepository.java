package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Articulo;
import com.example.tp_final.Entidades.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticuloRepository extends JpaRepository<Articulo,Long> {
}
