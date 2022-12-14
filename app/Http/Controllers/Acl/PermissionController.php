<?php

namespace App\Http\Controllers\Acl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $role = Permission::get();
        return view('permission');
    }

    public function formPermission()
    {
        $listPermissionSelect = Permission::all();
        return view('form.permissionFormModal', compact('listPermissionSelect'))->render();
    }
    
    public function getList(Request $request)
    {
        if($request->ajax()){
            $search = !$request['search'] ? true : false;
           
            if($request['search']){

                $permission = new Permission();
                $listPermission = $permission->where('name', 'LIKE', '%'.$request['search'].'%')->get();
            }else {
                $listPermission = Permission::paginate(2);
            }

            return view('list.listPermission', compact('listPermission', 'search'));
        }
    }

    public function getListPermission()
    {
        return $listPermissionSelect = Permission::all();
    }

    public function store(Request $request)
    {
        if($request->ajax()){
            return $permission = Permission::create(['name' => $request['name']]);
        }
    }

    public function show($id)
    {
        return $permission = Permission::find($id);
    }

    public function update(Request $request)
    {
        $permission = Permission::find($request['id']);
        return   $permission->update(['name' => $request['name']]);
    }

    public function delete(Request $request) 
    {
        $permission = Permission::find($request['id']);
        return   $permission->delete(['name' => $request['name']]);
    }
}
