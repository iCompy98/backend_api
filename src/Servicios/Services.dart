import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<Preguntas> fetchPregunta(int id) async {
  final response = await http.get(Uri.parse(
      'localhost:3000/preguntas/' + id.toString())); //Aqui se le pasa el URL

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return Preguntas.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Error al cargar pregunta');
  }
}

class Preguntas {
  final int id;
  final String pregunta;
  final int seccion;

  Preguntas({
    required this.id,
    required this.pregunta,
    required this.seccion,
  });

  factory Preguntas.fromJson(Map<String, dynamic> json) {
    return Preguntas(
      id: json['id'],
      pregunta: json['pregunta'],
      seccion: json['seccion'],
    );
  }
}
