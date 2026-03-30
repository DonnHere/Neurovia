<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Laporan;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    public function index()
    {
        return response()->json(Laporan::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string',
            'nohp' => 'required|string',
            'lokasi' => 'required|string',
            'tanggal' => 'required|date',
            'deskripsi' => 'required|string',
        ]);

        $laporan = Laporan::create($validated);
        return response()->json($laporan, 201);
    }

    public function show($id)
    {
        $laporan = Laporan::find($id);
        if (!$laporan) {
            return response()->json(['message' => 'Laporan not found'], 404);
        }
        return response()->json($laporan, 200);
    }

    public function update(Request $request, $id)
    {
        $laporan = Laporan::find($id);
        if (!$laporan) {
            return response()->json(['message' => 'Laporan not found'], 404);
        }

        $validated = $request->validate([
            'nama' => 'sometimes|required|string',
            'nohp' => 'sometimes|required|string',
            'lokasi' => 'sometimes|required|string',
            'tanggal' => 'sometimes|required|date',
            'deskripsi' => 'sometimes|required|string',
        ]);

        $laporan->update($validated);
        return response()->json($laporan, 200);
    }

    public function destroy($id)
    {
        $laporan = Laporan::find($id);
        if (!$laporan) {
            return response()->json(['message' => 'Laporan not found'], 404);
        }

        $laporan->delete();
        return response()->json(['message' => 'Laporan deleted'], 200);
    }
}