import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialDb1648029365962 implements MigrationInterface {
  name = 'initialDb1648029365962';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ci\` varchar(10) NOT NULL, \`name\` varchar(100) NOT NULL, \`birthDate\` date NULL, \`phone\` varchar(20) NOT NULL, \`refPhone\` varchar(20) NOT NULL DEFAULT 'SIN REFERENCIA', \`direction\` varchar(50) NOT NULL, \`email\` varchar(30) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_bf46f19067f5138aa6b8054da4\` (\`ci\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rol\` tinyint NOT NULL DEFAULT 1, \`ci\` varchar(10) NOT NULL, \`password\` varchar(60) NOT NULL, \`name\` varchar(100) NOT NULL, \`phone\` varchar(12) NOT NULL, \`picture\` varchar(80) NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_098e105d84a153cfa5d8306df9\` (\`ci\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`caja\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(10) NOT NULL DEFAULT 'CAJA 1', \`moneda\` varchar(15) NOT NULL DEFAULT 'BOLIVIANO', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`apertura\` (\`id\` int NOT NULL AUTO_INCREMENT, \`estado\` tinyint NOT NULL DEFAULT 1, \`montoApertura\` decimal(10,1) NOT NULL DEFAULT '0.0', \`montoActual\` decimal(10,1) NOT NULL DEFAULT '0.0', \`montoCierre\` decimal(10,1) NOT NULL DEFAULT '0.0', \`fechaApertura\` datetime NULL, \`fechaCierre\` datetime NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`cajaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`movimiento\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` tinyint NOT NULL DEFAULT 1, \`relaciones\` tinyint NOT NULL DEFAULT 1, \`concepto\` varchar(80) NOT NULL DEFAULT 'INGRESO DINERO', \`cantidad\` decimal(10,1) NOT NULL DEFAULT '0.0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`aperturaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`impresion_doc\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipoDocumento\` varchar(10) NOT NULL DEFAULT 'CONTRATO', \`costoImpresion\` decimal(5,1) NOT NULL DEFAULT '0.0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`movimientoId\` int NULL, \`prestamoId\` int NULL, UNIQUE INDEX \`REL_9243bd6f2a49d1e1545e03b1a2\` (\`movimientoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`picture\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`path\` varchar(70) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`inventarioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`inventario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`estado\` varchar(12) NOT NULL DEFAULT 'EMPENADO', \`tipo\` varchar(12) NOT NULL DEFAULT 'ARTICULO', \`descripcion\` varchar(200) NOT NULL DEFAULT 'NINGUNO', \`observacion\` varchar(70) NOT NULL DEFAULT 'NINGUNO', \`marca\` varchar(15) NULL, \`modelo\` varchar(15) NULL, \`linea\` varchar(15) NULL, \`serie\` varchar(30) NULL, \`placa\` varchar(15) NULL, \`chasis\` varchar(30) NULL, \`deuda\` varchar(15) NULL, \`ruat\` varchar(20) NULL, \`metal\` varchar(20) NULL, \`peso\` varchar(20) NULL, \`pureza\` varchar(20) NULL, \`precioVenta\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoCompra\` decimal(10,1) NOT NULL DEFAULT '0.0', \`precioAvaluo\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoPrestamo\` decimal(10,1) NOT NULL DEFAULT '0.0', \`fechaCompra\` datetime NULL, \`fechaVenta\` datetime NULL, \`fechaDevolucion\` datetime NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`movimientoId\` int NULL, \`prestamoId\` int NULL, UNIQUE INDEX \`REL_8cef02621561c30eac211761b6\` (\`movimientoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`pago\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipoPago\` varchar(12) NOT NULL DEFAULT 'PRESTAMO', \`costoAdministracion\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoPiso\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoInteres\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoPago\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoTotal\` decimal(10,1) NOT NULL DEFAULT '0.0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`movimientoId\` int NULL, \`prestamoId\` int NULL, UNIQUE INDEX \`REL_8c273d51a20ea65735d558e029\` (\`movimientoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`prestamo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaInicio\` timestamp NULL, \`fechaLimite\` timestamp NULL, \`fechaFinal\` timestamp NULL, \`estado\` varchar(10) NOT NULL DEFAULT 'ACTIVO', \`inventarioCantidad\` int NOT NULL DEFAULT '0', \`costoImpresion\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoAdministracion\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoPiso\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoCancelado\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoPrestamo\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoInteres\` decimal(10,1) NOT NULL DEFAULT '0.0', \`cobroInteres\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoTotal\` decimal(10,1) NOT NULL DEFAULT '0.0', \`costoVenta\` decimal(10,1) NOT NULL DEFAULT '0.0', \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, \`clientId\` int NULL, INDEX \`IDX_1e50c3b5fea6adbda9a61ae896\` (\`estado\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`amortizacion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`costoPago\` decimal(10,1) NOT NULL DEFAULT '0.0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`prestamoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`audit\` (\`id\` int NOT NULL AUTO_INCREMENT, \`action\` varchar(50) NOT NULL, \`auditTable\` varchar(15) NOT NULL, \`previousData\` json NOT NULL, \`actualData\` json NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`business\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL DEFAULT '', \`nit\` varchar(30) NOT NULL DEFAULT '', \`phone\` varchar(30) NOT NULL DEFAULT '', \`direction\` varchar(200) NOT NULL DEFAULT '', \`comission\` decimal(10,2) NOT NULL DEFAULT '0.00', \`interest\` int NOT NULL DEFAULT '15', \`cambioDolar\` decimal(6,2) NOT NULL DEFAULT '0.00', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`transaccion_moneda\` (\`id\` int NOT NULL AUTO_INCREMENT, \`operacion\` varchar(6) NOT NULL, \`cantidad\` decimal(10,1) NOT NULL, \`tipoCambio\` decimal(6,2) NOT NULL, \`tipoCambioOficial\` decimal(6,2) NOT NULL DEFAULT '6.96', \`diferencia\` decimal(10,1) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`caja\` ADD CONSTRAINT \`FK_b854ac7336e208c8534e74dacc4\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`apertura\` ADD CONSTRAINT \`FK_46b41589f3c067fabfae9f52eaa\` FOREIGN KEY (\`cajaId\`) REFERENCES \`caja\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movimiento\` ADD CONSTRAINT \`FK_cd07712b9e91adc39d7b9947522\` FOREIGN KEY (\`aperturaId\`) REFERENCES \`apertura\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`impresion_doc\` ADD CONSTRAINT \`FK_9243bd6f2a49d1e1545e03b1a20\` FOREIGN KEY (\`movimientoId\`) REFERENCES \`movimiento\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`impresion_doc\` ADD CONSTRAINT \`FK_bd0ce1181ed4aac9d9a9aa43c34\` FOREIGN KEY (\`prestamoId\`) REFERENCES \`prestamo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`picture\` ADD CONSTRAINT \`FK_d0b52b6d9c2ee3adf6c5b9f5bd3\` FOREIGN KEY (\`inventarioId\`) REFERENCES \`inventario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inventario\` ADD CONSTRAINT \`FK_8cef02621561c30eac211761b6c\` FOREIGN KEY (\`movimientoId\`) REFERENCES \`movimiento\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inventario\` ADD CONSTRAINT \`FK_7a2e9fd0e6e57d49b8e5e804d74\` FOREIGN KEY (\`prestamoId\`) REFERENCES \`prestamo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`pago\` ADD CONSTRAINT \`FK_8c273d51a20ea65735d558e0293\` FOREIGN KEY (\`movimientoId\`) REFERENCES \`movimiento\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`pago\` ADD CONSTRAINT \`FK_86d0ae1d4dd663c024417a590fb\` FOREIGN KEY (\`prestamoId\`) REFERENCES \`prestamo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`prestamo\` ADD CONSTRAINT \`FK_8c0a11027eed9e93d6d1a5f76df\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`prestamo\` ADD CONSTRAINT \`FK_6476c4a9ded2bca45bddf6f114f\` FOREIGN KEY (\`clientId\`) REFERENCES \`client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`amortizacion\` ADD CONSTRAINT \`FK_91d6c5be06c63de4750844998b9\` FOREIGN KEY (\`prestamoId\`) REFERENCES \`prestamo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`audit\` ADD CONSTRAINT \`FK_7ae389e858ad6f2c0c63112e387\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`transaccion_moneda\` ADD CONSTRAINT \`FK_04c1f751b66dbbdbe27beff4972\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`transaccion_moneda\` DROP FOREIGN KEY \`FK_04c1f751b66dbbdbe27beff4972\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`audit\` DROP FOREIGN KEY \`FK_7ae389e858ad6f2c0c63112e387\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`amortizacion\` DROP FOREIGN KEY \`FK_91d6c5be06c63de4750844998b9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`prestamo\` DROP FOREIGN KEY \`FK_6476c4a9ded2bca45bddf6f114f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`prestamo\` DROP FOREIGN KEY \`FK_8c0a11027eed9e93d6d1a5f76df\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`pago\` DROP FOREIGN KEY \`FK_86d0ae1d4dd663c024417a590fb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`pago\` DROP FOREIGN KEY \`FK_8c273d51a20ea65735d558e0293\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`inventario\` DROP FOREIGN KEY \`FK_7a2e9fd0e6e57d49b8e5e804d74\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`inventario\` DROP FOREIGN KEY \`FK_8cef02621561c30eac211761b6c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`picture\` DROP FOREIGN KEY \`FK_d0b52b6d9c2ee3adf6c5b9f5bd3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`impresion_doc\` DROP FOREIGN KEY \`FK_bd0ce1181ed4aac9d9a9aa43c34\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`impresion_doc\` DROP FOREIGN KEY \`FK_9243bd6f2a49d1e1545e03b1a20\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`movimiento\` DROP FOREIGN KEY \`FK_cd07712b9e91adc39d7b9947522\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`apertura\` DROP FOREIGN KEY \`FK_46b41589f3c067fabfae9f52eaa\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`caja\` DROP FOREIGN KEY \`FK_b854ac7336e208c8534e74dacc4\``,
    );
    await queryRunner.query(`DROP TABLE \`transaccion_moneda\``);
    await queryRunner.query(`DROP TABLE \`business\``);
    await queryRunner.query(`DROP TABLE \`audit\``);
    await queryRunner.query(`DROP TABLE \`amortizacion\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_1e50c3b5fea6adbda9a61ae896\` ON \`prestamo\``,
    );
    await queryRunner.query(`DROP TABLE \`prestamo\``);
    await queryRunner.query(
      `DROP INDEX \`REL_8c273d51a20ea65735d558e029\` ON \`pago\``,
    );
    await queryRunner.query(`DROP TABLE \`pago\``);
    await queryRunner.query(
      `DROP INDEX \`REL_8cef02621561c30eac211761b6\` ON \`inventario\``,
    );
    await queryRunner.query(`DROP TABLE \`inventario\``);
    await queryRunner.query(`DROP TABLE \`picture\``);
    await queryRunner.query(
      `DROP INDEX \`REL_9243bd6f2a49d1e1545e03b1a2\` ON \`impresion_doc\``,
    );
    await queryRunner.query(`DROP TABLE \`impresion_doc\``);
    await queryRunner.query(`DROP TABLE \`movimiento\``);
    await queryRunner.query(`DROP TABLE \`apertura\``);
    await queryRunner.query(`DROP TABLE \`caja\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_098e105d84a153cfa5d8306df9\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_bf46f19067f5138aa6b8054da4\` ON \`client\``,
    );
    await queryRunner.query(`DROP TABLE \`client\``);
  }
}
