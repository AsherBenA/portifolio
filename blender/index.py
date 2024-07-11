bl_info = {
    "name": "Render Multiple Cameras",
    "blender": (2, 80, 0),
    "category": "Render",
}

import bpy

class RENDER_MULTIPLE_CAMERAS_OT_RenderCameras(bpy.types.Operator):
    """Render multiple cameras"""
    bl_idname = "render_multiple_cameras.render"
    bl_label = "Render Multiple Cameras"
    bl_options = {'REGISTER', 'UNDO'}
    
    def execute(self, context):
        cameras = [obj for obj in bpy.context.scene.objects if obj.type == 'CAMERA' and obj.select_get()]
        
        if not cameras:
            self.report({'ERROR'}, "No cameras selected")
            return {'CANCELLED'}
        
        for camera in cameras:
            bpy.context.scene.camera = camera
            render_settings = bpy.context.scene.render
            bpy.ops.render.render(write_still=True)
        
        self.report({'INFO'}, f"Rendered {len(cameras)} cameras")
        return {'FINISHED'}

class RENDER_MULTIPLE_CAMERAS_PT_Panel(bpy.types.Panel):
    """Creates a Panel in the Render properties window"""
    bl_label = "Render Multiple Cameras"
    bl_idname = "RENDER_MULTIPLE_CAMERAS_PT_Panel"
    bl_space_type = 'PROPERTIES'
    bl_region_type = 'WINDOW'
    bl_context = "render"
    
    def draw(self, context):
        layout = self.layout
        layout.operator("render_multiple_cameras.render", text="Render Multiple Cameras")

def register():
    bpy.utils.register_class(RENDER_MULTIPLE_CAMERAS_OT_RenderCameras)
    bpy.utils.register_class(RENDER_MULTIPLE_CAMERAS_PT_Panel)

def unregister():
    bpy.utils.unregister_class(RENDER_MULTIPLE_CAMERAS_OT_RenderCameras)
    bpy.utils.unregister_class(RENDER_MULTIPLE_CAMERAS_PT_Panel)

if __name__ == "__main__":
    register()
