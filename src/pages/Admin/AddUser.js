import Card from "components/ui/Card";
import Input from "components/ui/Input";
import PhotoUploader from "parts/PhotoUploader";
import React from "react";

export default function AddUser() {
  return (
    <>
      <section class="p-8">
        <div class="container min-h-screen">
          <div class="w-full">
            <div className="flex justify-between items-center">
              <h2 class="text-3xl font-normal mb-6 leading-none">
                Tambah User
              </h2>
            </div>
            <div>
              <Card>
                <form>
                  <Input placeholder='Nama' />
                  <PhotoUploader />
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
